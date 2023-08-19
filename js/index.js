//Bài 4: Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript
    // Lưu ý: Đặt tên là reduce2()
    Array.prototype.reduce2 = function(...agrs){
        let first, cb, index;
        console.log('args', agrs)
        if(agrs.length===1){
            first=this[0];
            cb = agrs[0];
            index=1;
        }else {
            first = agrs[1];
            cb = agrs[0];
            index=0;
        }
        for(let i=index; index<this.length; index++){
            first = cb(first,this[index]);
        }
        return first
    }
    const data = [1, 2, 3];
    const result4 = data.reduce2((first,el)=>{
     return first + el
    }, 0);
    console.log('[Bài 4] result: ', result4)

//Bài 2: Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
    //Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ.
    const price = 120000;
    Number.prototype.getCurrency = function(unit){
        return this.toLocaleString("de-DE") + ` ${unit}`
    }
    console.log(price.getCurrency('a'))

//Bài 1: Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter
    // Yêu cầu chi tiết:
    // Hàm return về giá trị
    // Ép ràng buộc kiểu dữ liệu là số
    // Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi

    function sum(...args){
        let total
        let number = args.every((el)=>{
            return typeof el==='number' && el != NaN && el != Infinity
        })
        if(number){
            total = args.reduce((first, el)=>{
                return first + el
            })
            return total
        }else{
            return ` Dữ liệu đầu vào không phải là số !!! `
        }
        }
    console.log('[Bài 1] result: ' , sum(1, 2, -5))
//Bài 3: 
const arr3 = [
    {
      id: 1,
      name: "Chuyên mục 1",
      parent: 0,
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      parent: 0,
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      parent: 0,
    },
    {
      id: 4,
      name: "Chuyên mục 2.1",
      parent: 2,
    },
    {
      id: 5,
      name: "Chuyên mục 2.2",
      parent: 2,
    },
    {
      id: 6,
      name: "Chuyên mục 2.3",
      parent: 2,
    },
    {
      id: 7,
      name: "Chuyên mục 3.1",
      parent: 3,
    },
    {
      id: 8,
      name: "Chuyên mục 3.2",
      parent: 3,
    },
    {
      id: 9,
      name: "Chuyên mục 3.3",
      parent: 3,
    },
    {
      id: 10,
      name: "Chuyên mục 2.2.1",
      parent: 5,
    },
    {
      id: 11,
      name: "Chuyên mục 2.2.2",
      parent: 5,
    },
  ];

  const result3 = arr3.reduce((first, el)=>{
    if(el.parent == 0){
        delete el.parent
        if(el.id!=1){
            first.push({...el, children: []})
        }else{
            first.push({...el})
        }
        return first
    }
    else{
     if(el.parent!=0){
        let index = el.parent-1;
        delete el.parent
        first[index]?.children.push(el)
        return first
     }
    }
  },[])
  console.log('Bài 3: ', result3)