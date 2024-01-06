CREATE TABLE [dbo].[tbl_admin_info] (
    [emp_id]      NUMERIC (18)  IDENTITY (101, 1) NOT NULL,
    [name]        VARCHAR (100) NULL,
    [email]       VARCHAR (100) NULL,
    [status]      VARCHAR (50)  NULL,
    [reg_date]    VARCHAR (MAX) NULL,
    [phone]       NUMERIC (12)  NULL,
    [photo_id_no] VARCHAR (MAX) NULL,
    [password]    VARCHAR (50)  NULL,
    CONSTRAINT [PK_tbl_admin_info] PRIMARY KEY CLUSTERED ([emp_id] ASC)
);

