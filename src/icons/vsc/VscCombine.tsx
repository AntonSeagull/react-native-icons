

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscCombine = (props: IconProps) => {

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
          <Path  d="M1.5 1l-.5.5v3l.5.5h3l.5-.5v-3L4.5 1h-3zM2 4V2h2v2H2zm-.5 2l-.5.5v3l.5.5h3l.5-.5v-3L4.5 6h-3zM2 9V7h2v2H2zm-1 2.5l.5-.5h3l.5.5v3l-.5.5h-3l-.5-.5v-3zm1 .5v2h2v-2H2zm10.5-7l-.5.5v6l.5.5h3l.5-.5v-6l-.5-.5h-3zM15 8h-2V6h2v2zm0 3h-2V9h2v2zM9.1 8H6v1h3.1l-1 1 .7.6 1.8-1.8v-.7L8.8 6.3l-.7.7 1 1z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

