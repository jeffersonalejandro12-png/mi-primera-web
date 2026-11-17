document.addEventListener('DOMContentLoaded', () => {
    // 1. Terminal CLI Logic
    const cliInput = document.getElementById('cli-input');
    const terminalOutput = document.getElementById('terminal-output');

    const commands = {
        'help': "Available commands: help, status, stack, contact, clear",
        'status': "SYS_STATUS: ONLINE. All systems operating with structural integrity.",
        'stack': "Core: Business Architecture, Lean Operations, Systems Engineering.",
        'contact': "Primary communication channel: jeffersonalejandro12@gmail.com",
        'clear': "CLEAR"
    };

    if (cliInput && terminalOutput) {
        cliInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = cliInput.value.trim().toLowerCase();
                if (!query) return;

                // Echo input
                const userLine = document.createElement('div');
                userLine.innerHTML = `<span class="text-hazardOrange font-bold">$</span> ${escapeHtml(cliInput.value)}`;
                terminalOutput.appendChild(userLine);

                if (query === 'clear') {
                    terminalOutput.innerHTML = '';
                } else if (commands[query]) {
                    const resLine = document.createElement('div');
                    resLine.innerHTML = `<span class="text-blueprintCyan">&gt;</span> ${commands[query]}`;
                    terminalOutput.appendChild(resLine);
                } else {
                    const errLine = document.createElement('div');
                    errLine.innerHTML = `<span class="text-hazardOrange">&gt;</span> Command not recognized. Type 'help' for instructions.`;
                    terminalOutput.appendChild(errLine);
                }

                cliInput.value = '';
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });
    }

    // 2. Dispatch Form Simulation
    const dispatchForm = document.getElementById('dispatch-form');
    const formStatus = document.getElementById('form-status');

    if (dispatchForm) {
        dispatchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formStatus.textContent = "STATUS: TRANSMITTING_PACKET...";
            formStatus.className = "text-[11px] text-blueprintCyan font-bold";

            setTimeout(() => {
                formStatus.textContent = "STATUS: TRANSMISSION_SUCCESSFUL";
                formStatus.className = "text-[11px] text-statusGreen font-bold";
                dispatchForm.reset();

                setTimeout(() => {
                    formStatus.textContent = "STATUS: READY_TO_TRANSMIT";
                    formStatus.className = "text-[11px] text-secondaryText";
                }, 4000);
            }, 1000);
        });
    }

    // 3. Copy Email Button
    const copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('jeffersonalejandro12@gmail.com');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'COPIED_TO_CLIPBOARD';
            copyBtn.classList.add('bg-hazardOrange', 'text-black');
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.classList.remove('bg-hazardOrange', 'text-black');
            }, 2000);
        });
    }
});

function escaparHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
