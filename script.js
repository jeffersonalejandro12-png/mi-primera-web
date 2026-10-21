// Esperamos a que todo el DOM (la estructura HTML) esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. TERMINAL CLI INTERACTIVA
       ========================================================================== */
    const cliInput = document.getElementById('cli-input');
    const terminalOutput = document.getElementById('terminal-output');

    // Diccionario de comandos y sus respuestas
    const commands = {
        'help': 'Available commands: help, focus, status, contact, clear',
        'focus': 'Core: Business Architecture, Venture Building, Systems Governance, Lean Execution',
        'status': 'Systems online. Status: Actively governing and building sustainable ventures.',
        'contact': 'Primary channel: jeffersonalejandro12@gmail.com',
        'clear': 'CLEAR'
    };

    if (cliInput && terminalOutput) {
        cliInput.addEventListener('keydown', (e) => {
            // Escuchamos únicamente la tecla Enter
            if (e.key === 'Enter') {
                const query = cliInput.value.trim().toLowerCase();

                // Mostramos en la terminal la orden que escribió el usuario
                const userLine = document.createElement('div');
                userLine.textContent = `$ ${cliInput.value}`;
                terminalOutput.appendChild(userLine);

                // Procesamos la orden
                if (commands[query]) {
                    if (query === 'clear') {
                        terminalOutput.innerHTML = '';
                    } else {
                        const responseLine = document.createElement('div');
                        responseLine.className = 'text-cyan';
                        responseLine.textContent = `-> ${commands[query]}`;
                        terminalOutput.appendChild(responseLine);
                    }
                } else if (query !== '') {
                    const errorLine = document.createElement('div');
                    errorLine.className = 'text-orange';
                    errorLine.textContent = `-> Comando no reconocido: '${query}'. Escribe 'help' para ver la lista.`;
                    terminalOutput.appendChild(errorLine);
                }

                // Limpiamos el campo de texto y hacemos scroll automático hacia el final
                cliInput.value = '';
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });
    }

    /* ==========================================================================
       2. FILTRADO DE LA MATRIZ TÉCNICA (STACK)
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const stackItems = document.querySelectorAll('.card-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Quitamos el estado activo de todos los botones
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Activamos únicamente el botón clickeado
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Ocultamos o mostramos los ítems según su categoría
            stackItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    /* ==========================================================================
       3. BOTÓN PARA COPIAR CORREO AL PORTAPAPELES
       ========================================================================== */
    const copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const email = 'jeffersonalejandro12@gmail.com';
            
            // Usamos la API de Clipboard del navegador
            navigator.clipboard.writeText(email).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = '¡COPIADO!';
                copyBtn.style.borderColor = 'var(--status-green)';
                copyBtn.style.color = 'var(--status-green)';

                // Restauramos el botón después de 2 segundos
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.borderColor = '';
                    copyBtn.style.color = '';
                }, 2000);
            });
        });
    }

});