create database HomeAdmin;
use HomeAdmin;

-- Tabla Multas
create table Tax(
    TaxId int unsigned auto_increment primary key,
    TaxValue int unsigned not null,
    TaxYear year not null
);

-- Procedimiento Registro de multas
create procedure RegisterTax(
    in RegisterTaxValue int,
    in RegisterTaxYear year
)
insert into Tax (TaxValue,TaxYear) values (RegisterTaxValue,RegisterTaxYear);

-- Consulta especifica de Multas apartir de Año
create procedure ShowTax(
	in SelectYearTax year
)
select TaxId, TaxValue, TaxYear from Tax where TaxYear = SelectYearTax;

-- Actualizacion de Año y valor de las multas
create Procedure UpdateTax(
	in UpdateTaxId int,
	in UpdateTaxValue int,
    in UpdateTaxYear year
)
update Tax SET TaxValue=UpdateTaxValue,TaxYear=UpdateTaxYear where TaxId=UpdateTaxId;

-- Pruebas de los procedimientos

# call RegisterTax(74000,"2022");
# call ShowTax("2023");
# call UpdateTax(1,75000,"2023");

-- Consultas

# select * from Tax;