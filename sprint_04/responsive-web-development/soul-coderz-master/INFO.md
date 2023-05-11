# Informações fundamentais para o desenvolvimento

- Ao criar uma nova página, não esqueça do main básico

```html
    <main className="flex flex-col lg:flex-row items-center lg:items-start justify-center mb-6 p-10 pt-[6rem] w-full gap-10 font-title text-gray-900"
    >
    </main>
```

- Sempre que um component/page usar a o elemento

```html
<Link to={'/...'} onClick={() => setPage('...')}>
    ...
</Link>
```

Também é preciso, no início da função, antes do return, passar o "useContext(PageContext)" para o header do site funcionar devidamente. (Veja o Link da página de Login para mais detalhes)
