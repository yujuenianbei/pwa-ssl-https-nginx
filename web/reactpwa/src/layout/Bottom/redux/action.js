export const Page_Index = 'Page_Index';

// 用户弹窗
export function pager(data) {
  return {
    type: Page_Index,
    data
  }
}