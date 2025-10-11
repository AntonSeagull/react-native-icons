

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscSymbolEnumMember = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M7 3l1-1h6l1 1v5l-1 1h-4V8h4V3H8v3H7V3zm2 6V8L8 7H2L1 8v5l1 1h6l1-1V9zM8 8v5H2V8h6zm1.414-1L9 6.586V6h4v1H9.414zM9 4h4v1H9V4zm-2 6H3v1h4v-1z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

