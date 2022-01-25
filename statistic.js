var statistic = {
	valid_input: function(arr){
		if(Array.isArray(arr)){
			if(arr.length > 2){
				for(var i = 0; i < arr.length; i++){
					if(!Number.isFinite(arr[i]))
						return false;
				}
				return true;
			}
		}
		return false;
	},
	arithmetic_mean: function(arr){
		if(this.valid_input(arr)){
			var sum = 0;
			for(var i = 0; i < arr.length; i++){
				sum += arr[i]
			}
			return sum/arr.length;
		}
		return NaN;
	},
	median: function(arr){
		if(this.valid_input(arr)){
			arr.sort((a,b) => {
				if(a > b)
					return 1;
				else if(a < b)
					return -1;
				return 0;
			});
			if(arr.length%2 == 1){
				return arr[(arr.length+1)/2];
			}
			else{
				var num = arr.length/2;
				return 0.5*(arr[num] + arr[num + 1]);
			}
		}
		return NaN;
	},
	standard_deviation: function(arr){
		if(this.valid_input(arr)){
			var a = this.arithmetic_mean(arr);
			var sum = 0;
			for(var i = 0; i < arr.length; i++){
				sum += Math.pow(arr[i] - a, 2);
			}
			sum *= 1/(arr.length-1);
			return Math.sqrt(sum);
		}
		return NaN;
	},
	pearson_correlation_coefficient: function(arr, arr2){
		if(this.valid_input(arr) && this.valid_input(arr2)){
			if(arr.length == arr2.length){
				var a = this.arithmetic_mean(arr);
				var b = this.arithmetic_mean(arr2);
				var sum = 0;
				for(var i = 0; i < arr.length;i++){
					sum += (arr[i] - a)*(arr2[i] - b);
				}
				sum *= 1/(arr.length-1);
				return sum;
			}
		}
		return NaN;
	},
	correlation_coefficient: function(arr, arr2){
		if(this.valid_input(arr) && this.valid_input(arr2)){
			var sxy = this.pearson_correlation_coefficient(arr, arr2);
			var sx = this.standard_deviation(arr);
			var sy = this.standard_deviation(arr2);
			
			return sxy/(sx*sy);
		}
		return NaN;
	},
	regression_function: function(arr, arr2){
		if(this.valid_input(arr) && this.valid_input(arr2)){
			var sx = this.standard_deviation(arr);
			var sy = this.standard_deviation(arr2);
			var k = this.correlation_coefficient(arr, arr2)*(sy/sx);
			var d = this.arithmetic_mean(arr2) - k*this.arithmetic_mean(arr);
			return [k,d];
		}
		return NaN;
	},
	predict_y: function(k,d, y){
		if(typeof k == "number" && typeof d == "number" && typeof x == "number"){
			if(k != 0){
				return (y-d)/k;
			}
		}
		return NaN;
	},
	predict_x: function(k,d,x){
		if(typeof k == "number" && typeof d == "number" && typeof x == "number")
			return k*x + d;
		return NaN;
	}
}