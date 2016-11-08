// Per un'introduzione a modello vuoto, vedere la seguente documentazione:
// http://go.microsoft.com/fwlink/?LinkId=232509

(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;
	var isFirstActivation = true;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.voiceCommand) {
			// TODO: gestire i tipi di attivazione pertinenti. Se ad esempio l'app supporta l'avvio tramite comandi vocali,
			// si può scegliere qui se popolare un campo di input o scegliere una visualizzazione iniziale diversa.
		}
		else if (args.detail.kind === activation.ActivationKind.launch) {
			// Un'attivazione all'avvio si verifica quando l'utente avvia l'app tramite il riquadro
			// o richiama una notifica di tipo avviso popup facendo clic o toccando il corpo.
			if (args.detail.arguments) {
				// TODO: se l'app supporta gli avvisi popup, usare questo valore del payload dell'avviso popup per determinare il punto dell'app
				// in cui l'utente deve rispondere ad essi richiamando una notifica di tipo avviso popup.
			}
			else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {
				// TODO: questa applicazione è stata sospesa e quindi terminata per recuperare memoria.
				// Per creare un'esperienza utente uniforme, ripristinare qui lo stato dell'applicazione in modo che risulti come se l'app fosse sempre rimasta in esecuzione.
				// Nota: è consigliabile prendere nota dell'ora dell'ultima sospensione dell'app e ripristinare lo stato solo se la riattivazione è avvenuta dopo un breve periodo.
			}
		}

		if (!args.detail.prelaunchActivated) {
			// TODO: se il valore di prelaunchActivated è true, l'app è stata preavviata in background come misura di ottimizzazione.
			// In tal caso verrà sospesa dopo poco tempo.
			// Tutte le operazioni di lunga durata (come quelle intensive di I/O disco o di rete) o le modifiche allo stato dell'utente che si verificano all'avvio
			// devono essere eseguite in questo punto per evitare che vengano eseguite durante il preavvio.
			// In alternativa, è possibile eseguire queste operazioni in un gestore di tipo resume o visibilitychanged.
		}

		if (isFirstActivation) {
			// TODO: l'app è stata attivata ma non eseguita. Eseguire qui l'inizializzazione generale all'avvio.
			document.addEventListener("visibilitychange", onVisibilityChanged);
			args.setPromise(WinJS.UI.processAll());
		}

		isFirstActivation = false;
	};

	function onVisibilityChanged(args) {
		if (!document.hidden) {
			// TODO: l'app è appena diventata visibile. È il momento adatto per aggiornare la visualizzazione.
		}
	}

	app.oncheckpoint = function (args) {
		// TODO: questa applicazione sta per essere sospesa. Salvare qui eventuali stati che devono rimanere persistenti tra una sospensione e l'altra
		// È possibile usare l'oggetto WinJS.Application.sessionState, che viene salvato e ripristinato automaticamente tra una sospensione e l'altra.
		// Se è necessario completare un'operazione asincrona prima che l'applicazione venga sospesa, chiamare args.setPromise().
	};

	app.start();

})();
