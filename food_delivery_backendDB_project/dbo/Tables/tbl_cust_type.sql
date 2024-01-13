CREATE TABLE [dbo].[tbl_cust_type] (
    [cust_type_cd]   VARCHAR (50) NOT NULL,
    [type_desc]      VARCHAR (50) NULL,
    [order_limit]    NUMERIC (18) NULL,
    [total_turnover] NUMERIC (18) NULL,
    CONSTRAINT [PK_tbl_cust_types] PRIMARY KEY CLUSTERED ([cust_type_cd] ASC)
);

