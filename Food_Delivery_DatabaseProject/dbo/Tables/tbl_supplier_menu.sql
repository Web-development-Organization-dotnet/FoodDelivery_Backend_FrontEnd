CREATE TABLE [dbo].[tbl_supplier_menu] (
    [item_name]        VARCHAR (50)    NULL,
    [item_rate]        NUMERIC (10, 2) NULL,
    [item_type]        VARCHAR (50)    NULL,
    [supplier_menu_id] NUMERIC (18)    IDENTITY (1001, 1) NOT NULL,
    [supplier_id]      NUMERIC (18)    NULL,
    [food_type_code]   VARCHAR (50)    NULL,
    [food_id]          NUMERIC (18)    NULL,
    [available_qty]    NUMERIC (18)    NULL,
    [serv_cl_time]     VARCHAR (MAX)   NULL,
    [serv_op_time]     VARCHAR (MAX)   NULL,
    CONSTRAINT [PK_tbl_supplier_menu] PRIMARY KEY CLUSTERED ([supplier_menu_id] ASC),
    CONSTRAINT [FK_tbl_supplier_menu_tbl_food_info] FOREIGN KEY ([food_id]) REFERENCES [dbo].[tbl_food_info] ([food_id]),
    CONSTRAINT [FK_tbl_supplier_menu_tbl_supplier_info] FOREIGN KEY ([supplier_id]) REFERENCES [dbo].[tbl_supplier_info] ([supplier_id])
);

