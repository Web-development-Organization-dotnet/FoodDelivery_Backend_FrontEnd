CREATE TABLE [dbo].[tbl_supplier_info] (
    [supplier_id]      NUMERIC (18)  IDENTITY (2001, 1) NOT NULL,
    [supplier_name]    VARCHAR (50)  NULL,
    [supplier_address] VARCHAR (MAX) NULL,
    [supplier_gst_num] NUMERIC (18)  NULL,
    [reg_date]         VARCHAR (MAX) NULL,
    [pincode]          NUMERIC (18)  NULL,
    [supplier_type]    VARCHAR (50)  NULL,
    [supplier_status]  VARCHAR (50)  NULL,
    [supplier_menu_id] NUMERIC (18)  NULL,
    [longtitude]       VARCHAR (MAX) NULL,
    [latitude]         VARCHAR (MAX) NULL,
    [serv_pin_list]    VARCHAR (MAX) NULL,
    CONSTRAINT [PK_tbl_supplier_info] PRIMARY KEY CLUSTERED ([supplier_id] ASC),
    CONSTRAINT [FK_tbl_supplier_info_tbl_supplier_type] FOREIGN KEY ([supplier_type]) REFERENCES [dbo].[tbl_supplier_type] ([supplier_type])
);

