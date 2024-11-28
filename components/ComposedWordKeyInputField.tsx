import { colors, fontFamily, labels } from "@/const/style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Keyboard, NativeSyntheticEvent, Pressable, StyleProp, StyleSheet, TextInput, TextInputKeyPressEventData, View, ViewStyle, Text, ScrollView, TouchableOpacity } from "react-native";
import ComposedWordTag from "./ComposedWordTag";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { AppliedFilters } from "@/GLOBALCONTEXT";
import { DebugData } from "@/const/debug_backend";

interface ComposedWordKeyInputFieldProps
{
    icon?: string | undefined,
    iconColor? : string | undefined,
    placeholder?: string | undefined,
    style?: StyleProp<ViewStyle>,
    onSuggestionRefresh?: ((currentSearch : string) => string[])
}

export default function ComposedWordKeyInputField({ icon, iconColor, placeholder, onSuggestionRefresh, style } : ComposedWordKeyInputFieldProps)
{
    const [editing, onEditState] = useState(false);
    const [currentTag, onCurrentTag] = useState('');
    const [suggestion, updateSuggestions] = useState<string[]>([]);
    const inputField = useRef<TextInput>(null);

    const appliedFiltersContext = useContext(AppliedFilters);

    useEffect(()=>
        {
            if(currentTag.length == 0)
            {
                updateSuggestions([]);
                return;
            }

            var foundSuggestions : string[] = [];
            if(null != onSuggestionRefresh)
                foundSuggestions = onSuggestionRefresh(currentTag);
            
            updateSuggestions(foundSuggestions);     
        }, [currentTag]);

    Keyboard.removeAllListeners('keyboardDidHide');
    Keyboard.addListener('keyboardDidHide', ()=>
    {
        if(null != inputField)
        {
            inputField.current?.blur();
        }

        onEditState(false);
    });

    Keyboard.removeAllListeners('keyboardDidShow');
    Keyboard.addListener('keyboardDidShow', ()=> onEditState(true));

    function submit(value : string)
    {
        inputField.current?.clear();

        if(!DebugData.categoriesByNames.has(value) && !DebugData.categories.has(value))
        {
            alert('No such tag with value ' + value);
            return;
        }

        appliedFiltersContext.setFilters([...appliedFiltersContext.appliedFilters, value]);
    }

    function onKeyPress(e : NativeSyntheticEvent<TextInputKeyPressEventData>)
    {
        const key = e.nativeEvent.key;
        
        if(key != 'Backspace')
            return;

        if(currentTag.length > 0)
            return;

        appliedFiltersContext.setFilters(appliedFiltersContext.appliedFilters.slice(0, appliedFiltersContext.appliedFilters.length - 1));
    }

    function removeTag(index : number)
    {
        if(appliedFiltersContext.appliedFilters.length === 1)
        {
            appliedFiltersContext.setFilters([]);
            return;    
        } 

        console.log('remove tag ' + index);
        const newArray = appliedFiltersContext.appliedFilters.filter((item, id) => index != id);
        console.log(newArray);

        appliedFiltersContext.setFilters(newArray);
    }

    function drawTag(tag : string, index : number) : ReactNode
    {
        var tagName = DebugData.categories.get(tag)?.title;
        return <ComposedWordTag key={index} style={ { marginTop: 5 } } onClose={()=> removeTag(index)}>{ tagName }</ComposedWordTag>;
    }


    function drawSuggestions(sug : string, index : number) : ReactNode
    {
        return ( 
            <Pressable style={ innerStyle.suggestionListItem } onPress={()=>
            {
                console.log('complete with: ' + sug);
                var id = DebugData.categoriesByNames.get(sug)?.id;
                
                if(id === undefined)
                {
                    alert('No filter with tag ' + sug);
                    return;
                }

                submit(id);
            }}>
                <Text key={index} style={ [labels.normal, fontFamily.default] }>{ sug }</Text>
            </Pressable>
        );
    }
    
    return (
        
        <View style={ [innerStyle.container, style] }>
            
            <View style={ innerStyle.suggestionContainer }>
                <View style={ innerStyle.searchContainer }>
                    
                    {
                        appliedFiltersContext.appliedFilters.map((tag, index) => drawTag(tag, index))
                    }

                    <TextInput  ref={inputField} 
                                onSubmitEditing={()=> { submit(currentTag) }}
                                onKeyPress={key => onKeyPress(key)}
                                onChangeText={value => onCurrentTag(value) }
                                placeholder={undefined == placeholder ? "" : placeholder} 
                                numberOfLines={1} 
                                style={ innerStyle.field }
                                textAlignVertical="top">
                    </TextInput>

                </View>
                {
                    editing && suggestion.length > 0 &&
                    <ScrollView style={ innerStyle.suggestionList } showsHorizontalScrollIndicator={false}>
                        { suggestion.map((sug, index) => drawSuggestions(sug, index)) }
                    </ScrollView>
                }
            </View>
             { undefined != icon && <AntDesign style={ innerStyle.icon } key={0} size={28} name={icon} color={undefined == iconColor ? 'black' : iconColor}/> }
        </View>
    );
}

const innerStyle = StyleSheet.create({
    
    container:
    {
        height: 'auto',
        flexDirection: 'row'
    },
    searchContainer:
    {
        minHeight: 50,
        maxHeight: 250,
        borderRadius: 15,
        backgroundColor: colors.light,
        flexDirection: "row",
        paddingRight: 50,
        width: '100%',
        flexWrap: 'wrap',
        paddingTop: 5,
        paddingLeft: 10,
    },
    field:
    {
        minWidth: 50,
        width: '50%',
        height: '100%',
        textAlign: 'left',
    },
    icon:
    {
        position: 'absolute',
        right: 15,
        paddingTop: 10,
    },
    focusPressable:
    {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 0,
        width: '85%',
        height: '100%',
    },
    suggestionContainer:
    {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15
    },
    suggestionList:
    {
        padding: 5,
        maxHeight: 200,
        overflow: 'hidden',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.unselected,
    },
    suggestionListItem:
    {
        borderBottomWidth: 1,
        paddingBottom: 5,
        borderColor: colors.light, 
    }
});