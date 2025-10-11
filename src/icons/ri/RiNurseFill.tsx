

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiNurseFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M14.9571 15.564C17.6154 16.6219 19.5726 19.0639 19.9387 22H4.0625C4.42862 19.0639 6.38587 16.6219 9.04417 15.564L12.0006 20L14.9571 15.564ZM18.0006 2V8C18.0006 11.3137 15.3143 14 12.0006 14C8.6869 14 6.00061 11.3137 6.00061 8V2H18.0006ZM16.0006 8H8.00061C8.00061 10.2091 9.79147 12 12.0006 12C14.2098 12 16.0006 10.2091 16.0006 8Z" />
        </G>
      </Svg>
    );
  }

