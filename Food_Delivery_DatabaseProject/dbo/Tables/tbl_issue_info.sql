CREATE TABLE [dbo].[tbl_issue_info] (
    [dispute_no]  NUMERIC (18)  NOT NULL,
    [raised_on]   DATETIME      NULL,
    [issue_desc]  VARCHAR (MAX) NULL,
    [ticket_stat] VARCHAR (MAX) NULL,
    [resolution]  VARCHAR (MAX) NULL,
    [resolved_on] DATETIME      NULL,
    [trans_id]    NUMERIC (18)  NULL,
    [order_id]    NUMERIC (18)  NULL,
    CONSTRAINT [PK_tbl_issue_info] PRIMARY KEY CLUSTERED ([dispute_no] ASC),
    CONSTRAINT [FK_tbl_issue_info_tbl_order_info] FOREIGN KEY ([order_id]) REFERENCES [dbo].[tbl_order_info] ([order_id]),
    CONSTRAINT [FK_tbl_issue_info_tbl_transaction_info] FOREIGN KEY ([trans_id]) REFERENCES [dbo].[tbl_transaction_info] ([trans_id])
);

