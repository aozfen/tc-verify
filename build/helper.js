'use strict';

module.exports = {
  TCNumberValidation: function TCNumberValidation(val) {
    var singleNo = 0;var doubleNo = 0;var result = 0;

    if (val === null || val === undefined) return { valid: false, error: { message: 'Tc Kimlik numarası eksik.' } };

    if (typeof val === 'number') val = String(val);

    if (val.length !== 11) return { valid: false, error: { message: 'Tc Kimlik numarası 11 rakamlı olmalıdır.' } };

    if (val[0] === 0) return { valid: false, error: { message: 'TC Kimlik numarasının ilk değeri 0 ile başlayamaz.' } };

    singleNo = parseInt(val[0], 10) + parseInt(val[2], 10) + parseInt(val[4], 10) + parseInt(val[6], 10) + parseInt(val[8], 10);
    doubleNo = parseInt(val[1], 10) + parseInt(val[3], 10) + parseInt(val[5], 10) + parseInt(val[7], 10);

    singleNo *= 7;
    result = Math.abs(singleNo - doubleNo);

    if (result % 10 != val[9]) return { valid: false, error: { message: 'Geçersiz TC Kimlik numarası.' } };

    return { valid: true };
  },
  nameValidation: function nameValidation(val) {
    if (val === '' || val === null || val === undefined) return { valid: false, error: { message: 'Ad ve Soyad alanı eksik.' } };

    return { valid: true, val: val.toUpperCase() };
  },
  birthyearValidation: function birthyearValidation(val) {
    var time = new Date();
    var currentYear = time.getFullYear();

    if (val === null || val === undefined) return { valid: false, error: { message: 'Doğum yılı eksik.' } };

    if (typeof val === 'number') val = String(val);

    if (val.length !== 4) return { valid: false, error: { message: 'Doğum yılı 4 rakamlı olmalıdır.' } };

    if (val < 1800 || val > currentYear) return { valid: false, error: { message: 'Doğum yılı 1800 ile ' + currentYear + ' aralığın da olmalıdır.' } };

    return { valid: true };
  }
};
//# sourceMappingURL=helper.js.map