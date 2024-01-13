CREATE TABLE [dbo].[tbl_order_breakup] (
    [slno]           NUMERIC (18)  NOT NULL,
    [order_id]       NUMERIC (18)  NULL,
    [food_id]        NUMERIC (18)  NULL,
    [food_name]      VARCHAR (MAX) NULL,
    [supplier_id]    NUMERIC (18)  NULL,
    [quantity]       INT           NULL,
    [price_per_item] INT           NULL,
    CONSTRAINT [PK_tbl_order_breakup] PRIMARY KEY CLUSTERED ([slno] ASC),
    CONSTRAINT [FK_tbl_order_breakup_tbl_food_info] FOREIGN KEY ([food_id]) REFERENCES [dbo].[tbl_food_info] ([food_id]),
    CONSTRAINT [FK_tbl_order_breakup_tbl_order_breakup] FOREIGN KEY ([order_id]) REFERENCES [dbo].[tbl_order_info] ([order_id]),
    CONSTRAINT [FK_tbl_order_breakup_tbl_supplier_info] FOREIGN KEY ([supplier_id]) REFERENCES [dbo].[tbl_supplier_info] ([supplier_id])
);

