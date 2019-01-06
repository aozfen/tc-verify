import soap from 'soap';
import { TCNumberValidation, nameValidation, birthyearValidation } from './helper';

const url = 'https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL';

module.exports = async ({tc, Ad, Soyad, DogumYili}) => {

	const TCvalidResult = TCNumberValidation(tc);
	const FirstNameValidResult = nameValidation(Ad);
	const LastNameValidResult = nameValidation(Soyad);
	const BirthYearValidResult = birthyearValidation(DogumYili);

	if (!TCvalidResult.valid) return TCvalidResult;
	if (!FirstNameValidResult.valid) return FirstNameValidResult;
  if (!LastNameValidResult.valid) return LastNameValidResult;
  if (!BirthYearValidResult.valid) return BirthYearValidResult;
  
  const args = {
		TCKimlikNo: tc,
		Ad: FirstNameValidResult.val,
		Soyad: LastNameValidResult.val,
		DogumYili,
  };
  
  const soapResult = new Promise((res, rej) => {
    soap.createClient(url, (err, client) => {
      client.TCKimlikNoDogrula(args, (err, result) => {
        res(result.TCKimlikNoDogrulaResult);
      });
    });
  }) 

	return soapResult;
};
