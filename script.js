function calculate_total(i)
	{
	if(i>0)
		{
		if(document.getElementById('txt_'+i).value.search(/\S/) != -1)
			{
			if(isNaN(document.getElementById('txt_'+i).value) == false)
				{
				if(document.getElementById('txt_'+i).value>=0)
					{
					document.getElementById('d_txt_'+i).value = (document.getElementById('txt_'+i).value * cal_factor[i]).toFixed(2);
					}
				else
					{
					document.getElementById('d_txt_'+i).value = '';
					}
				}
			else
			{
			document.getElementById('d_txt_'+i).value = '';
			}
			}
		else
		{
		document.getElementById('d_txt_'+i).value = '';
		}
		}
	
	var monthTotal = 0;
	var totalmember = 1;
	var tmp;
	for(tmp=1; tmp<=7; tmp++)
		{
		if(document.getElementById('d_txt_'+tmp).value.search(/\S/) != -1)
			{
			if(isNaN(document.getElementById('d_txt_'+tmp).value) == false)
				{
				if(document.getElementById('d_txt_'+tmp).value>=0)
					{
					monthTotal = monthTotal + parseFloat(document.getElementById('d_txt_'+tmp).value);
					}
				}
			}
		}
	
	if(document.getElementById('txt_0').value.search(/\S/) != -1)
		{
		if(isNaN(document.getElementById('txt_0').value) == false)
			{
			if(document.getElementById('txt_0').value>=0)
				{
				if(document.getElementById('txt_0').value.indexOf('.') == -1)
					{
					totalmember = document.getElementById('txt_0').value;
					}
				}
			}
		}
	
	if(totalmember>0)
		{            
		for(tmp=8; tmp<=10; tmp++)
			{
			if(document.getElementById('d_txt_'+tmp).value.search(/\S/) != -1)
				{
				if(isNaN(document.getElementById('d_txt_'+tmp).value) == false)
					{
					if(document.getElementById('d_txt_'+tmp).value>=0)
						{
						monthTotal = monthTotal + parseFloat(document.getElementById('d_txt_'+tmp).value/totalmember);
						}
					}
				}
			}
		}
	
	if(monthTotal>0)
		{
		  document.getElementById('txtmonthtotal').value = monthTotal.toFixed(2);
		  document.getElementById('txtyeartotal').value = (monthTotal*12/1000).toFixed(2);
          document.getElementById('numberoftonnes').innerText = (monthTotal*12/1000).toFixed(2);
		}
	else
	{
		document.getElementById('txtmonthtotal').value = '';
		document.getElementById('txtyeartotal').value = '';
	}

        document.getElementById('your').style = "width:"+(((monthTotal*12/1000).toFixed(2))/.1868)+"%;";


	//calculate_total(i)

}

var cal_factor=new Array();
cal_factor[0]="";
cal_factor[1]="2.327";
cal_factor[2]="2.68134633426855";
cal_factor[3]="3.05911236953988";
cal_factor[4]="0.305911236953988";
cal_factor[5]="0.0536";
cal_factor[6]=parseFloat("0.054/(28.31*3.629*25)");
cal_factor[7]="0.1";
cal_factor[8]="42.5";
cal_factor[9]="1.82";
cal_factor[10]="0.9";