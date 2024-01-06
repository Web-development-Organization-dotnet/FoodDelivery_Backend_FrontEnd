CREATE TABLE [dbo].[tbl_cust_wallet] (
    [cust_wallet_id] NUMERIC (18)    NOT NULL,
    [cust_id]        NUMERIC (18)    NULL,
    [wallet_balance] NUMERIC (16, 2) NULL,
    [last_updated]   DATETIME        NULL,
    CONSTRAINT [PK_tbl_cust_wallet] PRIMARY KEY CLUSTERED ([cust_wallet_id] ASC),
    CONSTRAINT [FK_tbl_cust_wallet_tbl_cust_info] FOREIGN KEY ([cust_id]) REFERENCES [dbo].[tbl_cust_info] ([cust_id])
);

