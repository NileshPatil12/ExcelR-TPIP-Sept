

class driver1{
    public static String removeDuplicates(String str) {
        String result = "";
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (result.indexOf(c) == -1) { // Check if character is already in result
                result += c;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        String str = "hello world";
        String result = removeDuplicates(str);
        System.out.println("Original string: " + str);
        System.out.println("String without duplicates: " + result);
    }
}
