// JavaScript Document

$(function(){
	
	$('.news .sysContent nav ul li:nth-of-type(1) a time').attr('id','news01');
	$('.news .sysContent nav ul li:nth-of-type(2) a time').attr('id','news02');
	$('.news .sysContent nav ul li:nth-of-type(3) a time').attr('id','news03');
	let news01 = document.getElementById('news01');
	let news02 = document.getElementById('news02');
	let news03 = document.getElementById('news03');
	news01.textContent = news01.textContent.substr(0,11);
	news02.textContent = news02.textContent.substr(0,11);
	news03.textContent = news03.textContent.substr(0,11);
	
});