```mermaid
erDiagram
todos {
    id BIGINT PK "ID" 
    title VARCHAR(256) "やること"
    completed BOOLEAN "完了フラグ" 
    order INT "並び順" 
    created_at TIMESTAMP "作成日"
    updated_at TIMESTAMP "更新日"
}
```