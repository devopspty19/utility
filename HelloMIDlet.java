/*
  java
  Ejemplo J2ME MIDlet básico
*/
public class HelloMIDlet extends MIDlet {
    public void startApp() {
        Display display = Display.getDisplay(this);
        Form form = new Form("Hello World");
        form.append("¡Hola desde J2ME!");
        display.setCurrent(form);
    }
    
    public void pauseApp() {}
    public void destroyApp(boolean unconditional) {}
}
