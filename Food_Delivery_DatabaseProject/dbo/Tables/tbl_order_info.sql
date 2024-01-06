CREATE TABLE [dbo].[tbl_order_info] (
    [order_id]      NUMERIC (18)  NOT NULL,
    [agent_id]      NUMERIC (18)  NULL,
    [cust_id]       NUMERIC (18)  NULL,
    [trans_id]      NUMERIC (18)  NULL,
    [order_date]    DATETIME      NULL,
    [delivery_addr] VARCHAR (MAX) NULL,
    [order_status]  VARCHAR (50)  NULL,
    [cust_otp]      INT           NULL,
    [ship_to_pin]   VARCHAR (50)  NULL,
    CONSTRAINT [PK_tbl_order_info] PRIMARY KEY CLUSTERED ([order_id] ASC),
    CONSTRAINT [FK_tbl_order_info_tbl_agent_info] FOREIGN KEY ([agent_id]) REFERENCES [dbo].[tbl_agent_info] ([agent_id]),
    CONSTRAINT [FK_tbl_order_info_tbl_cust_info] FOREIGN KEY ([cust_id]) REFERENCES [dbo].[tbl_cust_info] ([cust_id]),
    CONSTRAINT [FK_tbl_order_info_tbl_transaction_info] FOREIGN KEY ([trans_id]) REFERENCES [dbo].[tbl_transaction_info] ([trans_id])
);

