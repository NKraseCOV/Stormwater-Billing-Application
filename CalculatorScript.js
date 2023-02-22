function utilityRateCalculator() {
				//utility rate per 2500 sqft - need to update annually
					//2023
				let rate = 14.05;
				//polygon area
				let area = document.getElementById("areainput").value;
				//units - acres or square-feet
				const units = document.getElementById("units").value;
				//service class - commercial, industrial, multi-family, single-family, government
				const sc = document.getElementById("serviceclass").value;
				//discount - boolean
				const discountBool = document.getElementById("discountbox").checked;
				//convert & round area
				area = Number.parseFloat(units === 'square-feet' ? area/43560 : area).toFixed(2);
				//calculate result
				let result = Number.parseFloat(area*rate/2500*43560).toFixed(2);
				if (discountBool) {
					result = result * 0.5;
				}
				if (result < rate || area < 0.05) {
					result = rate;
				}
				//format & return result
				document.getElementById("result").value = '$'+String(result)+' per month';
			}