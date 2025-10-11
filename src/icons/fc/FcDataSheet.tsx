

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcDataSheet = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M39,16v7h-6v-7h-2v7h-6v-7h-2v7h-7v2h7v6h-7v2h7v6h-7v2h25V16H39z M39,25v6h-6v-6H39z M25,25h6v6h-6V25z M25,33h6v6h-6V33z M33,39v-6h6v6H33z" fill="#90CAF9" />
          <Path d="M7,7v34h10V17h24V7H7z M9,23v-6h6v6H9z M15,25v6H9v-6H15z M17,9h6v6h-6V9z M25,9h6v6h-6V9z M15,9v6H9V9H15z M9,39v-6h6v6H9z M39,15h-6V9h6V15z" fill="#0097A7" />
        </G>
      </Svg>
    );
  }

