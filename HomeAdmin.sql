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

-- Consulta general de las multas
select * from Tax;