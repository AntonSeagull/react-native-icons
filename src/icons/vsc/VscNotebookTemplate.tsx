

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscNotebookTemplate = (props: IconProps) => {

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
          <Path  d="M1 5H0V4h1v1zm0 2H0V6h1v1zm0 2H0V8h1v1zm0 2H0v-1h1v1zm0 2H0v-1h1v1zm0 1v1H0v-1h1zm0 1h1v1H1v-1zm2 0h1v1H3v-1zM1 1H0V0h1v1zm2 0H2V0h1v1zm1-1h1v1H4V0zm3 1H6V0h1v1zm2 0H8V0h1v1zm2 0h-1V0h1v1zm0 1V1h1v1h-1zm1 2h-1V3h1v1zM1 3H0V2h1v1z" />
          <Path  d="M5 6l1-1h7l1 1v9l-1 1H6l-1-1V6zm1 0v9h7V6H6z" fillRule="evenodd" clipRule="evenodd" />
          <Path  d="M15 7h1v2h-1V7zm0 3h1v2h-1v-2zm0 3h1v2h-1v-2zM7 8h5v1H7z" />
        </G>
      </Svg>
    );
  }

