

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandAirtable = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M3 10v8l7 -3v-2.6z" />
          <Path  d="M3 6l9 3l9 -3l-9 -3z" />
          <Path  d="M14 12.3v8.7l7 -3v-8z" />
        </G>
      </Svg>
    );
  }

