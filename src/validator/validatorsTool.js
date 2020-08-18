// 使用范例
// import { validatorsTool } from '@/util/validatorsTool';
// import { SneakRules } from '@/validation/validateRule';
//   let isCorrect = validatorsTool.validate(this.formData, SneakRules);

// 校验规则
const _testHook = {
  isRequired:  (str) => String(str).length > 0,
  isName:  (str) => /^[\u4E00-\u9FA5]{2,4}$/.test(str),
  isPhone: (str) => /^1[3456789][0-9]{9}$/.test(str),
  isCode:  (str) => /^[0-9]{6}$/.test(str),
  isBankcard: (str) => /^[0-9]{16,19}$/.test(str),
  isIdcard: (code) => {
    let city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
    let pass = true;
    let msg = "验证成功";
    //验证身份证格式（6个地区编码，8位出生日期，3位顺序号，1位校验位）
    if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)){
      pass=false;
      msg = "身份证号格式错误";
    }else if(!city[code.substr(0,2)]){
      pass=false;
      msg = "身份证号地址编码错误";
    }else{
      //18位身份证需要验证最后一位校验位
      if(code.length == 18){
        code = code.split('');
        //∑(ai×Wi)(mod 11)
        //加权因子
        let factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
        //校验位
        let parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
        let sum = 0;
        let ai = 0;
        let wi = 0;
        for (let i = 0; i < 17; i++)
        { 
          ai = Number(code[i]);
          wi = factor[i];
          sum += ai * wi;
        }
        if(parity[sum % 11] != code[17].toUpperCase()){
          pass=false;
          msg = "身份证号校验位错误";
        }
      }
    }
    return pass ;
  },
  isAge: (str) =>  /^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(str),
  isWx: (str) => ((/^1[3456789][0-9]{9}$/.test(str) || /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/.test(str))),
  isInt: (str) => /^[0-9]*$/.test(str),
  isMoney: (str) => /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/.test(str),
  maxLength: (str, length) => String(str).length <= length,
  minLength: (str, length) => String(str).length >= length,
  max: (str, n) => str < n,
  maxIn: (str, n) => str <= n,
  min: (str, n) => str > n,
  minIn: (str, n) => str >= n
}

class Validator {
  constructor(){
    // 挂载默认校验器
    for (let i in _testHook ){
      this[i] = _testHook[i];
    }
  }

  validate(formData, rulesArr){

    let result = true;
    for (let i = 0; i < rulesArr.length; i++){
      let { field, need, or, rules } = rulesArr[i];

      // 存在need，但是不满足need中指定的前置条件，所以当前的规则不用校验
      if (need && !this.testNeed(formData,need)) {continue;}
      let flag = true;
      if (this.isEmpty(formData[field])){
        // 判定的表单项值为空，则判定是否有or属性
        if (need){
          if (this.isEmpty(rules)){
            flag = this.isRequired(formData[field]);
            if(!flag) console.log('field', field);
          } else {
            let parts = /^(.+?)\((.+)\)$/.exec(rules);
            if (parts){
              flag = this[parts[1]](formData[field], parts[2]);
              if(!flag) console.log('field', field);
            } else {
              flag = this[rules](formData[field]);
              if(!flag) console.log('field', field);
            }
          }
        } else if (!or) {flag = false;}
        else {
          flag = this.testOr(formData, or);
          if(!flag) console.log('field', field);
        }
      } else {
        // 表单项不为空，直接判定
        if (this.isEmpty(rules)){
          flag = this.isRequired(formData[field]);
          if(!flag) console.log('field', field);
        } else {
          let parts = /^(.+?)\((.+)\)$/.exec(rules);
          
          if (parts){
            flag = this[parts[1]](formData[field], parts[2]);
            if(!flag) console.log('field', field);
          } else {
            flag = this[rules](formData[field]);
            if(!flag) console.log('field', field);
          }
          
        }
      }
      result = result && flag;
      if (!result) {return false;}
    }
    return result;
  }

  // 校验表单项中若有一项没有值的话，判定结果为空
  testFormData(){
    if (this.isEmpty(this.formData)) {
      console.error('表单项不能为空');
      return false;
    }
    for (let key in this.formData){
      if (this.isEmpty(this.formData[key])) {return false;}
    }
    return true;
  }

  isEmpty(value){
    if (!value || value === '' || value === undefined){
      return true;
    } else {return false;}
  }

  isArray(value){
    return Array.isArray(value);
  }

  testNeed(formData, need){
    if (!need || need === '' || need === undefined || !this.isArray(need)) {
      throw new Error('need参数格式有误!');
    }
    let result = true;
    let flag = true;
    for (let i = 0; i < need.length; i++){
      let { field, value } = need[i];
      if (formData[field] != value) {flag = false;}
      result = result && flag;
    }
    return flag;
  }

  testOr(formData, or){
    if (or === '' || or === undefined || !this.isArray(or)) {
      throw new Error('or参数格式有误!');
    }
    // 因为本身表单项为空
    let result = false;
    let flag = false;
    for (let i = 0; i < or.length; i++){
      let { field, rules } = or[i];
      if (this.isEmpty(formData[field])){ 
        flag = false;
      } else {
        if (this.isEmpty(rules)){
          flag = this.isRequired(formData[field]);
        } else {
          let parts = /^(.+?)\((.+)\)$/.exec(rules);
          if (parts){
            flag = this[parts[1]](formData[field], parts[2]);
          } else {
            flag = this[rules](formData[field]);
          }
        }
      }
      result = result || flag;
    }
    return result;
  }
}

const validatorsTool = new Validator();

export {
  validatorsTool
};
