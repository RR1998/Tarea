var objeto = {
    medida: 0,
    unidad: "",
    unidadC: "",
    tipoMedida: "",
    Calcular: function () {
        this.medida = prompt("Ingrese la medida", 100);
        this.unidad = prompt("Ingrese la unidad", "cm").toLowerCase();
        this.unidadC = prompt("Ingrese la unidad a la que se convertira", "m").toLowerCase();
        this.tipoMedida = prompt("Ingrese su tipo de medida", "L");
        switch (this.unidad) {
            case "cm":
                if (this.unidadC == "m") {
                    return String((100 * this.medida)) + this.unidadC;
                }
            case "m":
                if (this.unidadC == "cm") {
                    return String((this.medida / 100)) + this.unidadC;
                }
                if (this.unidadC == "km") {
                    return String((this.medida / 1000)) + this.unidadC;
                }
                if (this.unidadC == "pies") {
                    return String((this.medida * 3.2808)) + this.unidadC
                }
            case "km":
                if (this.unidadC == "m") {
                    return String((100 * this.medida)) + this.unidadC;
                }
            case "pies":
                if (this.unidadC == "m") {
                    return String((this.medida / 0.3048)) + this.unidadC;
                }
            case "c":
                if (this.unidadC == "f") {
                    return String((this.medida*1.8)+32) + this.unidadC.toUpperCase();
                }
                if (this.unidadC == "k") {
                    return String(this.medida+273.15) + this.unidadC.toUpperCase();
                }
            case "f":
                if (this.unidadC == "c") {
                    return String((this.medida-32)/1.8) + this.unidadC.toUpperCase();
                }
                if (this.unidadC == "k") {
                    return String((this.medida +459.67)*(5/9)) + this.unidadC.toUpperCase();
                }
            case "k":
                if (this.unidadC == "f") {
                    return String((this.medida*(9/5))-459.67) + this.unidadC.toUpperCase();
                }
                if (this.unidadC == "c") {
                    return String(this.medida-273.15) + this.unidadC.toUpperCase();
                }
            default:
                return "No ingreso datos que son posibles convertir";
        }
    }
};

var conversion=objeto;
conversion.Calcular();
