CREATE TABLE [dbo].[tbl_cust_addr] (
    [cust_address_id] NUMERIC (18) IDENTITY (1, 1) NOT NULL,
    [cust_id]         NUMERIC (18) NULL,
    [cust_pin]        NUMERIC (6)  NULL,
    [cust_address]    VARCHAR (50) NULL,
    [longitude]       VARCHAR (50) NULL,
    [latitude]        VARCHAR (50) NULL,
    CONSTRAINT [PK_tbl_cust_addr] PRIMARY KEY CLUSTERED ([cust_address_id] ASC),
    CONSTRAINT [FK_tbl_cust_addr_tbl_cust_info] FOREIGN KEY ([cust_id]) REFERENCES [dbo].[tbl_cust_info] ([cust_id])
);

