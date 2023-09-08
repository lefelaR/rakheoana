
export function formatter(amount: any) {
    if (amount > 0) {
        var form = new Intl.NumberFormat('en-ZA', {
            style: 'currency',
            currency: 'ZAR',
        });
        return form.format(amount);
    } else {
        return amount;
    }
};


export function inputFormtter(amount:any){
    return amount.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function formatCurrency(input:any, blur:any) {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.
    
    // get input value
    var input_val = input.val();
    
    // don't validate empty input
    if (input_val === "") { return; }
    
    // original length
    var original_len = input_val.length;
  
    // initial caret position 
    var caret_pos = input.prop("selectionStart");
      
    // check for decimal
    if (input_val.indexOf(".") >= 0) {
  
      // get position of first decimal
      // this prevents multiple decimals from
      // being entered
      var decimal_pos = input_val.indexOf(".");
  
      // split number by decimal point
      var left_side = input_val.substring(0, decimal_pos);
      var right_side = input_val.substring(decimal_pos);
  
      // add commas to left side of number
      left_side = inputFormtter(left_side);
  
      // validate right side
      right_side = inputFormtter(right_side);
      
      // On blur make sure 2 numbers after decimal
      if (blur === "blur") {
        right_side += "00";
      }
      
      // Limit decimal to only 2 digits
      right_side = right_side.substring(0, 2);
  
      // join number by .
      input_val = "$" + left_side + "." + right_side;
  
    } else {
      // no decimal entered
      // add commas to number
      // remove all non-digits
      input_val = inputFormtter(input_val);
      input_val = "$" + input_val;
      
      // final formatting
      if (blur === "blur") {
        input_val += ".00";
      }
    }
}
    