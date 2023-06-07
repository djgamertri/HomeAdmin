create database HomeAdmin;
use HomeAdmin;
-- Tabla Multas
create table Tax(
    TaxId int unsigned auto_increment primary key,
    TaxValue int unsigned not null,
    TaxYear year not null,
    TaxImplement TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- tabla Residente
create table Resident(
	IdResident int unsigned primary key,
    NameResident varchar(255) not null,
    AgeResident tinyint not null,
    TypeDocumentResident Varchar(255) not null,
    NumDocumentResident bigint not null,
    PhoneNumberResident bigint Unsigned not null,
    EmailResident varchar(255) not null,
    NumberHouseResident smallint unsigned not null,
	ResidentRegister TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tax Procedures

-- Procedimiento Registro de multas
create procedure RegisterTax(
    in RegisterTaxValue int,
    in RegisterTaxYear year
)
insert into Tax (TaxValue,TaxYear) values (RegisterTaxValue,RegisterTaxYear);

-- Consulta especifica de Multas
create procedure ShowTax(
	in SelectYearTax year
)
select TaxId, TaxValue, TaxYear from Tax where TaxYear = SelectYearTax;

-- Actualizacion de las multas
create Procedure UpdateTax(
	in UpdateTaxId int,
	in UpdateTaxValue int,
    in UpdateTaxYear year
)
update Tax SET TaxValue=UpdateTaxValue,TaxYear=UpdateTaxYear where TaxId=UpdateTaxId;

-- Resident Procedures

-- Procedimiento Registro de Residente
create procedure RegisterResident(
	in RegisterIdResident int,
    in RegisterNameResident varchar(255),
    in RegisterAgeResident tinyint,
    in RegisterTypeDocumentResident Varchar(255),
    in RegisterNumDocumentResident bigint,
    in RegisterPhoneNumberResident bigint,
    in RegisterEmailResident varchar(255),
    in RegisterNumberHouseResident smallint
)
insert into Resident (IdResident,NameResident,AgeResident,TypeDocumentResident,NumDocumentResident,PhoneNumberResident,EmailResident,NumberHouseResident) values (RegisterIdResident,RegisterNameResident,RegisterAgeResident,RegisterTypeDocumentResident,RegisterNumDocumentResident,RegisterPhoneNumberResident,RegisterEmailResident,RegisterNumberHouseResident);

-- Procedimiento Actualizar Residente
create procedure UpdateResident(
	in UpdateIdResident int,
    in UpdateNameResident varchar(255),
    in UpdateAgeResident tinyint,
	in UpdateTypeDocumentResident Varchar(255),
    in UpdateNumDocumentResident bigint,
    in UpdatePhoneNumberResident bigint,
	in UpdateEmailResident varchar(255),
    in UpdateNumberHouseResident smallint
)
Update Resident Set NameResident=UpdateNameResident,AgeResident=UpdateAgeResident,TypeDocumentResident=UpdateTypeDocumentResident,NumDocumentResident=UpdateNumDocumentResident,PhoneNumberResident=UpdatePhoneNumberResident,EmailResident=UpdateEmailResident,NumberHouseResident=UpdateNumberHouseResident where IdResident=UpdateIdResident;

-- Pruebas de los procedimientos

#call RegisterTax(74000,"2022");
#call UpdateTax(1,75000,"2023");
#call ShowTax("2023");
#call RegisterResident(1013260718,"andres fernando malagon",17,"documento de identidad",3142960599,"andresfernandoxd1591@gmail.com",103);
#call UpdateResident(1013260718,"Andres Fernando Malagon",18,"Cedula de Ciudadania",3212946031,"andresfernandoxd1591@gmail.com",175); 

-- Consultas

#select * from Tax;
#select * from Resident;
