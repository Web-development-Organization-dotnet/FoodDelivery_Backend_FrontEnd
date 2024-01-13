CREATE TABLE [dbo].[tbl_supplier_type] (
    [supplier_type]   VARCHAR (50)  NOT NULL,
    [description]     VARCHAR (MAX) NULL,
    [yearly_turnover] NUMERIC (18)  NULL,
    CONSTRAINT [PK_tbl_supplier_type] PRIMARY KEY CLUSTERED ([supplier_type] ASC)
);

