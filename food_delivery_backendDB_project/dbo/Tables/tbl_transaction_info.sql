CREATE TABLE [dbo].[tbl_transaction_info] (
    [trans_id]       NUMERIC (18)    NOT NULL,
    [cust_id]        NUMERIC (18)    NULL,
    [supplier_id]    NUMERIC (18)    NULL,
    [order_id]       NUMERIC (18)    NULL,
    [agent_id]       NUMERIC (18)    NULL,
    [amount]         NUMERIC (16, 2) NULL,
    [trans_mode]     VARCHAR (50)    NULL,
    [trans_datetime] DATETIME        NULL,
    [trans_status]   VARCHAR (50)    NULL,
    [trans_remarks]  VARCHAR (MAX)   NULL,
    CONSTRAINT [PK_tbl_transaction_info] PRIMARY KEY CLUSTERED ([trans_id] ASC),
    CONSTRAINT [FK_tbl_transaction_info_tbl_agent_info] FOREIGN KEY ([agent_id]) REFERENCES [dbo].[tbl_agent_info] ([agent_id]),
    CONSTRAINT [FK_tbl_transaction_info_tbl_cust_info] FOREIGN KEY ([cust_id]) REFERENCES [dbo].[tbl_cust_info] ([cust_id]),
    CONSTRAINT [FK_tbl_transaction_info_tbl_supplier_info] FOREIGN KEY ([supplier_id]) REFERENCES [dbo].[tbl_supplier_info] ([supplier_id])
);

