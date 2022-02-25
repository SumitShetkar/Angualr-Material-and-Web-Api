create database AnyDB

CREATE TABLE [dbo].[AnyTAble](
	[ID] [int] Primary key IDENTITY(1,1)  NOT NULL,
	[productName] [varchar](50) NULL,
	[category] [varchar](50) NULL,
	[date] [datetime] NULL,
	[freshness] [varchar](50) NULL,
	[price] [int] NULL,
	[comments] [varchar](50) NULL)

	

