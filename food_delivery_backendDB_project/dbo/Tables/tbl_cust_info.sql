CREATE TABLE [dbo].[tbl_cust_info] (
    [cust_id]      NUMERIC (18) IDENTITY (1, 1) NOT NULL,
    [cust_type_cd] VARCHAR (50) NULL,
    [cust_name]    VARCHAR (50) NULL,
    [cust_email]   VARCHAR (50) NULL,
    [cust_phno]    NUMERIC (12) NULL,
    [cust_pin]     NUMERIC (6)  NULL,
    CONSTRAINT [PK_tbl_cust_info] PRIMARY KEY CLUSTERED ([cust_id] ASC),
    CONSTRAINT [FK_tbl_cust_info_tbl_cust_type] FOREIGN KEY ([cust_type_cd]) REFERENCES [dbo].[tbl_cust_type] ([cust_type_cd])
);

