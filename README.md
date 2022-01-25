<h1>Statistic</h1>
This small javascript library is containing statistic functions for regression analysis.

<h2>Including file</h2>
Write
'<script language="javascript" type="text/javascript" src="statistic.js"></script>'
to your head.

<h2>Use</h2>
Example:<br>
var myArray = [l,2,3,4]<br>
var result = statistic.arithmetic_mean(myArray)<br> 
// result = 2.5

<h2>Functions</h2>

<li><code>valid_input(array)</code></li>
Checking, if elements of input array are rational numbers.<br>
Return value is true, if all elements are rational numbers or returning false if not.
<br><br>
<li><code>arithmetic_mean(array)</code></li>
Calculating the arithmetic mean of input array.<br>
Return value is arithmetic mean on success and NaN on failure.
<br><br>
<li><code>median(array)</code></li>
Calculating the median of input array.<br>
Returning median on success and NaN on failure.
<br><br>
<li><code>standard_deviation(arr)</code></li>
Calculating the standard deviation of input array.<br>
Returning standard deviation on sucess and NaN on failure.
<br><br>
<li><code>pearson_correlation_coefficient(arrayX, arrayY)</code></li>
Calcutaing pearson correlation coefficient of input array.<br>
Returning pearson correlation coefficient and NaN on failure.
<br><br>
<li><code>correlation_coefficient(arrayX, arrayY)</code></li>
Calcutaing correlation coefficient of input array.<br>
Returning correlation coefficient and NaN on failure.
<br><br>
<li><code>regression_function(arrayX, arrayY)</code></li>
Calcutaing regression function of input array.<br>
Returning array with arr[0] = k and arr[1] = d and NaN on failure. Using function Y = K*X + D .
<br><br>
<li><code>predict_y(k,d,y)</code></li>
Calcutaing x with given parameters from <code>regression_function</code><br>
Returning array with arr[0] = k and arr[1] = d and NaN on failure.
<br><br>
<li><code>predict_x(k,d,x)</code></li>
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
