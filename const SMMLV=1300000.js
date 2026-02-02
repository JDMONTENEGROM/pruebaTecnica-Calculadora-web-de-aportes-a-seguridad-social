const SMMLV=1300000
const RATES={salud:0.04,pension:0.16,caja:0.04,arl:{1:0.0052,2:0.0104,3:0.0244,4:0.0435,5:0.0696}}
function formatCurrency(n){return n.toLocaleString('es-CO',{style:'currency',currency:'COP'})}
document.addEventListener('DOMContentLoaded',function(){
const form=document.getElementById('form-aportes')
const salarioInput=document.getElementById('salario')
const riesgoSelect=document.getElementById('riesgo')
const erroresDiv=document.getElementById('errores')
const resultadosSection=document.getElementById('resultados')
const vSalud=document.getElementById('v-salud')
const vPension=document.getElementById('v-pension')
const vCaja=document.getElementById('v-caja')
const vArl=document.getElementById('v-arl')
const vTotal=document.getElementById('v-total')
function showErrors(msgs){erroresDiv.innerHTML='<ul>'+msgs.map(m=>'<li>'+m+'</li>').join('')+'</ul>'}
function clearErrors(){erroresDiv.innerHTML=''}
form.addEventListener('submit',function(e){
e.preventDefault()
const salario=parseFloat(salarioInput.value)
const riesgo=parseInt(riesgoSelect.value,10)
const errores=[]
if(!Number.isFinite(salario)||salario<=0){errores.push('El salario debe ser un número positivo.')}
else if(salario<SMMLV){errores.push('El salario mensual no puede ser menor al salario mínimo legal vigente ('+formatCurrency(SMMLV)+').')}
if(![1,2,3,4,5].includes(riesgo)){errores.push('Debe seleccionar el nivel de riesgo ARL.')}
if(errores.length){showErrors(errores);resultadosSection.classList.add('oculto');return}
clearErrors()
const salud=salario*RATES.salud
const pension=salario*RATES.pension
const caja=salario*RATES.caja
const arl=salario*RATES.arl[riesgo]*salario
const total=salud+pension+caja+arl
vSalud.textContent=formatCurrency(salud)
vPension.textContent=formatCurrency(pension)
vCaja.textContent=formatCurrency(caja)
vArl.textContent='Riesgo '+riesgo+' — '+formatCurrency(arl)
vTotal.textContent=formatCurrency(total)
resultadosSection.classList.remove('oculto')
})
})