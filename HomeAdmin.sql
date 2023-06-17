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
    DateBornResident date not null,
    TypeDocumentResident Varchar(255) not null,
    PhoneNumberResident bigint Unsigned not null,
    EmailResident varchar(255) not null,
    NumberHouseResident smallint unsigned not null,
    StatusResident ENUM('Activo', 'Inactivo', 'Pendiente') not null DEFAULT 'Activo',
    PasswordResident varchar(255) not null,
	ResidentRegister TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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
call ShowTax("2023");

-- Actualizacion de Año y valor de las multas
create Procedure UpdateTax(
	in UpdateTaxId int,
	in UpdateTaxValue int,
    in UpdateTaxYear year
)
update Tax SET TaxValue=UpdateTaxValue,TaxYear=UpdateTaxYear where TaxId=UpdateTaxId;

-- Resident Procedure

-- Procedimiento Registro de Residente
create procedure RegisterResident(
	in RegisterIdResident int,
    in RegisterNameResident varchar(255),
    in RegisterDateBornResident date,
    in RegisterTypeDocumentResident Varchar(255),
    in RegisterPhoneNumberResident bigint,
    in RegisterEmailResident varchar(255),
	in RegisterPasswordResident varchar(255),
    in RegisterNumberHouseResident smallint
)
insert into Resident (IdResident,NameResident,DateBornResident,TypeDocumentResident,PhoneNumberResident,EmailResident,PasswordResident,NumberHouseResident)
values (RegisterIdResident,RegisterNameResident,RegisterDateBornResident,RegisterTypeDocumentResident,RegisterPhoneNumberResident,RegisterEmailResident,RegisterPasswordResident,RegisterNumberHouseResident);

-- Procedimiento Actualizar Residente
create procedure UpdateResident(
	in UpdateIdResident int,
    in UpdateNameResident varchar(255),
    in UpdateDateBornResident date,
	in UpdateTypeDocumentResident Varchar(255),
    in UpdatePhoneNumberResident bigint,
	in UpdateEmailResident varchar(255),
    in UpdateStatusResident enum("Activo","Inactivo"),
    in UpdatePasswordResident varchar(255),
    in UpdateNumberHouseResident smallint
)
Update Resident Set TypeDocumentResident=UpdateTypeDocumentResident,NameResident=UpdateNameResident,DateBornResident=UpdateDateBornResident,PhoneNumberResident=UpdatePhoneNumberResident,EmailResident=UpdateEmailResident,StatusResident=UpdateStatusResident,PasswordResident=UpdatePasswordResident,NumberHouseResident=UpdateNumberHouseResident where IdResident=UpdateIdResident;

-- Pruebas de los procedimientos

#call RegisterTax(74000,"2022");
#call UpdateTax(1,75000,"2023");
#call ShowTax("2023");
#call RegisterResident(1013260718,"andres fernando malagon","2005-12-20","documento de identidad",3142960599,"andresfernandoxd1591@gmail.com","2FICIuwba,ei{u7l#h}ZR@#",103);
#call UpdateResident(1013260718,"Andres Fernando Malagon","2005-12-20","Cedula de Ciudadania",3212946031,"andresfernandoxd1591@gmail.com",'Inactivo',"_XtY3iZi*cbmFE?#5",175); 

-- Consultas

#select * from Tax;
#select * from Resident;
