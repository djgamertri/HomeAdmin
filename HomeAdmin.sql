create database HomeAdmin;
use HomeAdmin;
-- Tabla Multas
create table Tax(
    TaxId int unsigned auto_increment primary key,
    TaxValue int unsigned not null,
    TaxYear year not null,
    TaxImplement TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Procedimiento Registro de multas
create procedure RegisterTax(
    in RegisterTaxValue int,
    in RegisterTaxYear year
)
insert into Tax (TaxValue,TaxYear) values (RegisterTaxValue,RegisterTaxYear);

-- Consulta especifica de Multas apartir de AÑo
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

-- tabla Residente
create table Resident(
	IdResident int unsigned primary key,
    FullnameResident varchar(255) not null,
    DateBornResident date not null,
    TypeDocumentResident Varchar(255) not null,
    PhoneNumberResident bigint Unsigned not null,
    EmailResident varchar(255) not null,
    NumberHouseResident smallint unsigned not null,
    StatusResident ENUM('Activo', 'Inactivo', 'Pendiente') not null,
	ResidentRegister TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Procedimiento Registro de Residente
create procedure RegisterResident(
	in RegisterIdResident int,
    in RegisterFullnameResident varchar(255),
    in RegisterDateBornResident date,
    in RegisterTypeDocumentResident Varchar(255),
    in RegisterPhoneNumberResident bigint,
    in RegisterEmailResident varchar(255),
    in RegisterStatusResident ENUM('Activo', 'Inactivo', 'Pendiente'),
    in RegisterNumberHouseResident smallint
)
insert into Resident (IdResident,FullnameResident,DateBornResident,TypeDocumentResident,PhoneNumberResident,EmailResident,StatusResident,NumberHouseResident)
values (RegisterIdResident,RegisterFullnameResident,RegisterDateBornResident,RegisterTypeDocumentResident,RegisterPhoneNumberResident,RegisterEmailResident,RegisterStatusResident,RegisterNumberHouseResident);

-- Procedimiento Actualizar Residente
create procedure UpdateResident(
	in UpdateIdResident int,
    in UpdateFullnameResident varchar(255),
    in UpdateDateBornResident date,
	in UpdateTypeDocumentResident Varchar(255),
    in UpdatePhoneNumberResident bigint,
	in UpdateEmailResident varchar(255),
    in UpdateStatusResident enum("Activo","Inactivo"),
    in UpdateNumberHouseResident smallint
)
Update Resident Set TypeDocumentResident=UpdateTypeDocumentResident,FullnameResident=UpdateFullnameResident,DateBornResident=UpdateDateBornResident,PhoneNumberResident=UpdatePhoneNumberResident,EmailResident=UpdateEmailResident,StatusResident=UpdateStatusResident,NumberHouseResident=UpdateNumberHouseResident where IdResident=UpdateIdResident;

-- Pruebas de los procedimientos

#call RegisterTax(74000,"2022");
#call UpdateTax(1,75000,"2023");
#call ShowTax("2023");
#call RegisterResident(1013260718,"andres fernando malagon","2005-12-20","documento de identidad",3142960599,"andresfernandoxd1591@gmail.com",'Activo',103);
#call UpdateResident(1013260718,"Andres Fernando Malagon","2005-12-20","Cedula de Ciudadania",3212946031,"andresfernandoxd1591@gmail.com",'Inactivo',175); 

-- Consultas

#select * from Tax;
#select * from Resident;