export default {
  columns: [
    {
      title: '规则名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
      key: 'desc'
    },
    ,
    {
      title: '服务调用次数',
      dataIndex: 'count',
      key: 'count',
      slot: 'count'
    },
    ,
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      slot: 'status'
    },
    {
      title: '上次调度时间',
      dataIndex: 'lastSchedule',
      key: 'lastSchedule'
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      slot: 'action'
    }
  ],
  pagination: {
    total: 200
  }
}
