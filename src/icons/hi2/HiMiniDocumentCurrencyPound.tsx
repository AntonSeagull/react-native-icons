

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiMiniDocumentCurrencyPound = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 20 20"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm5 7a1.5 1.5 0 0 1 2.56-1.06.75.75 0 1 0 1.062-1.061A3 3 0 0 0 8 9v1.25H6.75a.75.75 0 0 0 0 1.5H8v1a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 1 0 0-1.5H9.372c.083-.235.128-.487.128-.75v-1h1.25a.75.75 0 0 0 0-1.5H9.5V9Z" />
        </G>
      </Svg>
    );
  }

