CREATE TABLE [dbo].[tbl_cust_payment_mode] (
    [payment_mode_id] NUMERIC (18) NOT NULL,
    [cust_id]         NUMERIC (18) NULL,
    [payment_mode]    VARCHAR (50) NULL,
    CONSTRAINT [PK_tbl_cust_payment_mode] PRIMARY KEY CLUSTERED ([payment_mode_id] ASC),
    CONSTRAINT [FK_tbl_cust_payment_mode_tbl_cust_info] FOREIGN KEY ([cust_id]) REFERENCES [dbo].[tbl_cust_info] ([cust_id])
);

