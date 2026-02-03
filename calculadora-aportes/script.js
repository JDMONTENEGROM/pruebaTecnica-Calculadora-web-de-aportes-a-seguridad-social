const SMMLV=1750905
const RATES={salud:0.04,pension:0.16,caja:0.04,arl:{1:0.0052,2:0.0104,3:0.0244,4:0.0435,5:0.0696}}
function formatCurrency(n){return n.toLocaleString('es-CO',{style:'currency',currency:'COP'})}
function formatInputCOP(input){
let valor=input.value.replace(/[^\d]/g,'')
if(valor===''){input.value='';return}
let numero=Number(valor)/100
input.value=numero.toLocaleString('es-CO',{minimumFractionDigits:2,maximumFractionDigits:2})
}
function formatPasteCOP(e,input){
e.preventDefault()
const data=(e.clipboardData||window.clipboardData).getData('text')
const digits=data.replace(/[^\d]/g,'')
if(digits===''){input.value='';return}
input.value=Number(digits).toLocaleString('es-CO',{minimumFractionDigits:2,maximumFractionDigits:2})
}
function parseCOP(valor){
return Number(valor.replace(/\./g,'').replace(',','.'))
}
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
const minInfo=document.getElementById('min-info')
if(minInfo){minInfo.textContent='Salario mínimo vigente: '+formatCurrency(SMMLV)}
salarioInput.addEventListener('paste',function(e){formatPasteCOP(e,salarioInput)})
function showErrors(msgs){erroresDiv.innerHTML='<ul>'+msgs.map(m=>'<li>'+m+'</li>').join('')+'</ul>'}
function clearErrors(){erroresDiv.innerHTML=''}
form.addEventListener('submit',function(e){
e.preventDefault()
const salario=parseCOP(salarioInput.value)
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
const arl=salario*RATES.arl[riesgo]
const total=salud+pension+caja+arl
vSalud.textContent=formatCurrency(salud)
vPension.textContent=formatCurrency(pension)
vCaja.textContent=formatCurrency(caja)
vArl.textContent='Riesgo '+riesgo+' — '+formatCurrency(arl)
vTotal.textContent=formatCurrency(total)
resultadosSection.classList.remove('oculto')
})
})