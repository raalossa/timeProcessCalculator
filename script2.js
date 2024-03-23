 // Define objects

 const Ref0 = {


    code : "n/a",
    mppsil : "n/a",
    mpadh : "n/a",
    mpsustrato : "n/a",
    pradh : 0,
    prcr : 0,
    prtr : 0,
    premp : 0

};
 const Ref1 = {


    code : "Ref1",
    mppsil : "psil 120g",
    mpadh : "2ADH",
    mpsustrato : "EPU D20 6 mm",
    pradh : 1500,
    prcr : 2100,
    prtr : 25500,
    premp : 15500

};

const Ref2 = {
    code : "Ref2",
    mppsil : "psil 120g",
    mpadh : "ADH",
    mpsustrato : "EPU D15 10 mm",
    pradh : 3500,
    prcr : 2700,
    prtr : 45500,
    premp : 25500
};

const Ref3 = {
    code : "Ref3",
    mppsil : "psil 80g",
    mpadh : "ADH",
    mpsustrato : "EPU D15 5 mm",
    pradh : 500,
    prcr : 9100,
    prtr : 16500,
    premp : 7500
};


// Function Seleccion referencia col 1
function logObjectProperties1(refCode) {
    var refCode = document.getElementById("refcol1").value

  const obj = eval(refCode); // This is generally not recommended, but for this specific use case, it's fine
  if (obj) {
    console.log(`Object ${refCode}:`);
    console.log(`Color: ${obj.mppsil}`);
    console.log(`Size: ${obj.mpadh}`);
    console.log(`Units: ${obj.mpsustrato}`);
    console.log(`ADH (und/hr): ${obj.pradh}`);
    console.log(`CR (und/hr): ${obj.prcr}`);
    console.log(`TR (und/hr): ${obj.prtr}`);
    console.log(`EMP (und/hr): ${obj.premp}`);

  } else {
    console.log(`Object ${refCode} not found.`);
  }

  document.getElementById("adhc1").innerHTML = (obj.pradh);
  document.getElementById("crc1").innerHTML = (obj.prcr);
  document.getElementById("trc1").innerHTML = (obj.prtr);
  document.getElementById("empc1").innerHTML = (obj.premp);

}

// Function Seleccion referencia col 2
function logObjectProperties2(refCode) {
    var refCode = document.getElementById("refcol2").value

  const obj = eval(refCode); // This is generally not recommended, but for this specific use case, it's fine
  if (obj) {
    console.log(`Object ${refCode}:`);
    console.log(`Color: ${obj.mppsil}`);
    console.log(`Size: ${obj.mpadh}`);
    console.log(`Units: ${obj.mpsustrato}`);
    console.log(`ADH (und/hr): ${obj.pradh}`);
    console.log(`CR (und/hr): ${obj.prcr}`);
    console.log(`TR (und/hr): ${obj.prtr}`);
    console.log(`EMP (und/hr): ${obj.premp}`);

  } else {
    console.log(`Object ${refCode} not found.`);
  }

  document.getElementById("adhc2").innerHTML = (obj.pradh);
  document.getElementById("crc2").innerHTML = (obj.prcr);
  document.getElementById("trc2").innerHTML = (obj.prtr);
  document.getElementById("empc2").innerHTML = (obj.premp);

}

// Function Seleccion referencia col 3
function logObjectProperties3(refCode) {
    var refCode = document.getElementById("refcol3").value

  const obj = eval(refCode); // This is generally not recommended, but for this specific use case, it's fine
  if (obj) {
    console.log(`Object ${refCode}:`);
    console.log(`Color: ${obj.mppsil}`);
    console.log(`Size: ${obj.mpadh}`);
    console.log(`Units: ${obj.mpsustrato}`);
    console.log(`ADH (und/hr): ${obj.pradh}`);
    console.log(`CR (und/hr): ${obj.prcr}`);
    console.log(`TR (und/hr): ${obj.prtr}`);
    console.log(`EMP (und/hr): ${obj.premp}`);

  } else {
    console.log(`Object ${refCode} not found.`);
  }

  document.getElementById("adhc3").innerHTML = (obj.pradh);
  document.getElementById("crc3").innerHTML = (obj.prcr);
  document.getElementById("trc3").innerHTML = (obj.prtr);
  document.getElementById("empc3").innerHTML = (obj.premp);

}

//calculo de referenci seleccionada * Q requerida
function calcule(){

    var qc1 = document.getElementById("qc1").value
    var qc2 = document.getElementById("qc2").value
    var qc3 = document.getElementById("qc3").value
    var refCode1 = document.getElementById("refcol1").value
    var refCode2 = document.getElementById("refcol2").value
    var refCode3 = document.getElementById("refcol3").value



    console.log("qc1: "+ qc1);
    console.log("qc2: "+ qc2);
    console.log("qc3: "+ qc3);


    //Seleccion refCode1

    const obj1 = eval(refCode1);
    if (obj1) {
      console.log(`Object ${refCode1}:`);
      console.log(`Color: ${obj1.mppsil}`);
      console.log(`Size: ${obj1.mpadh}`);
      console.log(`Units: ${obj1.mpsustrato}`);
      console.log(`ADH (und/hr): ${obj1.pradh}`);
      console.log(`CR (und/hr): ${obj1.prcr}`);
      console.log(`TR (und/hr): ${obj1.prtr}`);
      console.log(`EMP (und/hr): ${obj1.premp}`);
  
    } else {
      console.log(`Object ${refCode1} not found.`);
    }
    
    //Seleccion refCode2

    const obj2 = eval(refCode2);
    if (obj2) {
      console.log(`Object ${refCode1}:`);
      console.log(`Color: ${obj2.mppsil}`);
      console.log(`Size: ${obj2.mpadh}`);
      console.log(`Units: ${obj2.mpsustrato}`);
      console.log(`ADH (und/hr): ${obj2.pradh}`);
      console.log(`CR (und/hr): ${obj2.prcr}`);
      console.log(`TR (und/hr): ${obj2.prtr}`);
      console.log(`EMP (und/hr): ${obj2.premp}`);
  
    } else {
      console.log(`Object ${refCode2} not found.`);
    }

    //Seleccion refCode3

    const obj3 = eval(refCode3);
    if (obj3) {
      console.log(`Object ${refCode3}:`);
      console.log(`Color: ${obj3.mppsil}`);
      console.log(`Size: ${obj3.mpadh}`);
      console.log(`Units: ${obj3.mpsustrato}`);
      console.log(`ADH (und/hr): ${obj3.pradh}`);
      console.log(`CR (und/hr): ${obj3.prcr}`);
      console.log(`TR (und/hr): ${obj3.prtr}`);
      console.log(`EMP (und/hr): ${obj3.premp}`);
  
    } else {
      console.log(`Object ${refCode3} not found.`);
    }

    //impreskion referencias
    document.getElementById("refc1").innerHTML = (refCode1);
    document.getElementById("refc2").innerHTML = (refCode2);
    document.getElementById("refc3").innerHTML = (refCode3);

    //Calculo  


    //Columna 1
    console.log("Q: "+ qc1);
    console.log("prcr: "+ obj1.pradh);

    var hradhc1 = (qc1 / obj1.pradh ); 
    var hrcrc1 = (qc1 / obj1.prcr ); 
    var hrtrc1 = (qc1 / obj1.prtr ); 
    var hrempc1 = (qc1 / obj1.premp ); 
    var thrc1 = (hradhc1+ hrcrc1+ hrtrc1 + hrempc1 );

    console.log("Resultados Ref Col 1");
    console.log(hradhc1);
    console.log(hrcrc1);
    console.log(hrtrc1);
    console.log(hrempc1);
    console.log("total: " + thrc1);

    document.getElementById("radhc1").innerHTML = (hradhc1.toFixed(2));
    document.getElementById("rcrc1").innerHTML = (hrcrc1.toFixed(2));
    document.getElementById("rtrc1").innerHTML = (hrtrc1.toFixed(2));
    document.getElementById("rempc1").innerHTML = (hrempc1.toFixed(2));
    document.getElementById("rtc1").innerHTML = (thrc1.toFixed(2));

        //Columna 2

    console.log("Q: "+ qc2);
    console.log("prcr: "+ obj2.pradh);

    var hradhc2 = (qc2 / obj2.pradh ); 
    var hrcrc2 = (qc2 / obj2.prcr ); 
    var hrtrc2 = (qc2 / obj2.prtr ); 
    var hrempc2 = (qc2 / obj2.premp ); 
    var thrc2 = (hradhc2+ hrcrc2+ hrtrc2 + hrempc2 );

    console.log("Resultados Ref Col 2");
    console.log(hradhc2);
    console.log(hrcrc2);
    console.log(hrtrc2);
    console.log(hrempc2);
    console.log("total c2: " + thrc2);

    document.getElementById("radhc2").innerHTML = (hradhc2.toFixed(2));
    document.getElementById("rcrc2").innerHTML = (hrcrc2.toFixed(2));
    document.getElementById("rtrc2").innerHTML = (hrtrc2.toFixed(2));
    document.getElementById("rempc2").innerHTML = (hrempc2.toFixed(2));
    document.getElementById("rtc2").innerHTML = (thrc2.toFixed(2));

        //Columna 3

    console.log("Q: "+ qc3);
    console.log("prcr: "+ obj3.pradh);

    var hradhc3 = (qc3 / obj3.pradh ); 
    var hrcrc3 = (qc3 / obj3.prcr ); 
    var hrtrc3 = (qc3 / obj3.prtr ); 
    var hrempc3 = (qc3 / obj3.premp ); 
    var thrc3 = (hradhc3+ hrcrc3+ hrtrc3 + hrempc3 );

    console.log("Resultados Ref Col 3");
    console.log(hradhc3);
    console.log(hrcrc3);
    console.log(hrtrc3);
    console.log(hrempc3);
    console.log("total c3: " + thrc3);

    document.getElementById("radhc3").innerHTML = (hradhc3.toFixed(2));
    document.getElementById("rcrc3").innerHTML = (hrcrc3.toFixed(2));
    document.getElementById("rtrc3").innerHTML = (hrtrc3.toFixed(2));
    document.getElementById("rempc3").innerHTML = (hrempc3.toFixed(2));
    document.getElementById("rtc3").innerHTML = (thrc3.toFixed(2));


    // Total por fila

    var thrf1 = (hradhc1 + hradhc2 + hradhc3);
    console.log("Total Fila 1 ADH: "+ thrf1);

    var thrf2 = (hrcrc1 + hrcrc2 + hrcrc3);
    console.log("Total Fila 2 CR: "+ thrf2);

    var thrf3 = (hrtrc1 + hrtrc2 + hrtrc3);
    console.log("Total Fila 3 TR: "+ thrf3);

    var thrf4 = (hrempc1 + hrempc2 + hrempc3);
    console.log("Total Fila 4 EMP: "+ thrf4);

    var thtt = (thrf1 + thrf2 + thrf3 + thrf4 );
    console.log("Total General de horas : "+ thtt);


    document.getElementById("radhc4").innerHTML = (thrf1.toFixed(2));
    document.getElementById("rcrc4").innerHTML = (thrf2.toFixed(2));
    document.getElementById("rtrc4").innerHTML = (thrf3.toFixed(2));
    document.getElementById("rempc4").innerHTML = (thrf4.toFixed(2));
    document.getElementById("rtc4").innerHTML = (thtt.toFixed(2));


}
