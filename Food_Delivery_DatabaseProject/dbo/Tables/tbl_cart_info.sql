CREATE TABLE [dbo].[tbl_cart_info] (
    [slno]             NUMERIC (18) NOT NULL,
    [food_id]          NUMERIC (18) NULL,
    [food_name]        VARCHAR (50) NULL,
    [status]           VARCHAR (50) NULL,
    [supplier_id]      NUMERIC (18) NULL,
    [quantity]         INT          NULL,
    [cust_id]          NUMERIC (18) NULL,
    [cust_address_id]  NUMERIC (18) NULL,
    [cart_regist_date] DATETIME     NULL,
    [process_date]     DATETIME     NULL,
    CONSTRAINT [PK_tbl_cart_info] PRIMARY KEY CLUSTERED ([slno] ASC),
    CONSTRAINT [FK_tbl_cart_info_tbl_cust_addr] FOREIGN KEY ([cust_address_id]) REFERENCES [dbo].[tbl_cust_addr] ([cust_address_id]),
    CONSTRAINT [FK_tbl_cart_info_tbl_cust_info] FOREIGN KEY ([cust_id]) REFERENCES [dbo].[tbl_cust_info] ([cust_id]),
    CONSTRAINT [FK_tbl_cart_info_tbl_food_info] FOREIGN KEY ([food_id]) REFERENCES [dbo].[tbl_food_info] ([food_id]),
    CONSTRAINT [FK_tbl_cart_info_tbl_supplier_info] FOREIGN KEY ([supplier_id]) REFERENCES [dbo].[tbl_supplier_info] ([supplier_id])
);

