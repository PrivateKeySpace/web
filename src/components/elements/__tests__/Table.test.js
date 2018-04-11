import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { Table } from '..'

const testColumns = [
  {name: 'Date', key: 'date'},
  {name: 'Status', key: 'status'},
  {name: 'Created By', key: 'createdBy'},
  {name: 'To', key: 'to'},
  {name: 'Amount', key: 'amount'},
  {name: 'Reason', key: 'reason'}
]

const testData = [
  {
    date: '23.05.2012',
    status: 'Request 2/3',
    createdBy: 'Mark Spenser',
    to: 'Bitcoin Address',
    amount: 100,
    reason: 'Test'
  },
  {
    date: <div>'23.05.2012'</div>,
    status: <div>'Request 2/3'</div>,
    createdBy: <i>'Mark Spenser'</i>,
    to: <i>'Bitcoin Address'</i>,
    amount: <b>100</b>,
    reason: <b>'Test'</b>
  },
  {
    date: '23.05.2012',
    createdBy: 'Mark Spenser',
    amount: 100,
    reason: 'Test'
  }
]

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders empty table without crashing and matches snapshot', () => {
  const table = render(
    <Table />
  )
  expect(table).toMatchSnapshot()
})

it('renders empty table with columns and default empty message, does not crash and matches snapshot', () => {
  const table = render(
    <Table columns={testColumns} />
  )
  expect(table).toMatchSnapshot()
})

it('renders empty table with columns and empty message, does not crash and matches snapshot', () => {
  const table = render(
    <Table columns={testColumns} emptyMessage='Test data is empty' />
  )
  expect(table).toMatchSnapshot()
})

it('renders table without columns, with data and empty message, does not crash and matches snapshot', () => {
  const table = render(
    <Table data={testData} emptyMessage='Test data is empty' />
  )
  expect(table).toMatchSnapshot()
})

it('renders table with columns, data and empty message, does not crash and matches snapshot', () => {
  const table = render(
    <Table columns={testColumns} data={testData} emptyMessage='Test data is empty' />
  )
  expect(table).toMatchSnapshot()
})
