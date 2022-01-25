<h1>Statistic</h1>
This small javascript library is containing following functions:

<h2>Functions</h2>

<li>valid_input(array)</li>
Checking, if elements of input array are rational numbers.<br>
Return value is true, if all elements are rational numbers or returning false if not.
<br><br>
<li>arithmetic_mean(array)</li>
Calculating the arithmetic mean of input array.<br>
Return value is arithmetic mean on success and NaN on failure.
<br><br>
<li>median(array)</li>
Calculating the median of input array.<br>
Returning median on success and NaN on failure.
<br><br>
<li>standard_deviation(arr)</li>
Calculating the standard deviation of input array.<br>
Returning standard deviation on sucess and NaN on failure.
<br><br>
<li>pearson_correlation_coefficient(arrayX, arrayY)</li>
Calcutaing pearson correlation coefficient of input array.<br>
Returning pearson correlation coefficient and NaN on failure.
<br><br>
<li>correlation_coefficient(arrayX, arrayY)</li>
Calcutaing correlation coefficient of input array.<br>
Returning correlation coefficient and NaN on failure.
<br><br>
<li>regression_function(arrayX, arrayY)</li>
Calcutaing regression function of input array.<br>
Returning array with arr[0] = k and arr[1] = d and NaN on failure.
<br><br>
<li>predict_y(k,d,y)</li>
Calcutaing x with given parameters from <code>regression_function</code><br>
Returning array with arr[0] = k and arr[1] = d and NaN on failure.
<br><br>
<li>predict_x(k,d,x)</li>
Calcutaing y with given parameters from <code>regression_function</code><br>
Returning array with arr[0] = k and arr[1] = d and NaN on failure.
<br><br>

<h2>Notes</h2>
Make sure that, if you are using <code>pearson_correlation_coefficient</code> , <code>correlation_coefficient</code> or <code>regression_function</code>, your input arrays are matching each other.


For example:

Your data

X # Y<br>
#########<br>
1.0 # 2.0<br>
1.3 # 2.6<br>
1.7 # 2.4<br>
2.1 # 2.7<br>
2.0 # 2.8<br>
2.5 # 3.0<br>


Your array have to be like this:


var arr1 = [ 1.0, 1.3, 1.7, 2.1, 2.0, 2.5 ] -> All X values<br>
var arr2 = [ 2.0, 2.6, 2.4, 2.7, 2.8, 3.0 ] -> All Y values<br>

Matching

arr1[0] -> arr2[0]<br>
...<br>
arr1[i] -> arr2[i]   == X -> Y<br>
